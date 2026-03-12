import { Router } from "express";
import client from "../../config/db";

import crypto from "crypto";

const loginRouter = Router();

loginRouter.post("/", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ success: false, message: "Veuillez remplir tous les champs." });
  }

  // Query the database for a user with the provided username (which can be either email or pseudo)
  client.query('SELECT * FROM fredouil.compte WHERE mail = $1 OR pseudo = $2', [req.body.username, req.body.username])
    .then((dbRes: any) => {
      if (dbRes.rows.length === 0) {
        return res.status(401).json({ success: false, message: "Aucun compte trouvé pour '" + req.body.username + "'" });
      }

      const user = dbRes.rows[0];
      if (user.motpasse === crypto.createHash("sha1").update(req.body.password).digest("hex")) {
        // Update statut_connexion to 1 for the logged-in user
        client.query('UPDATE fredouil.compte SET statut_connexion = $1 WHERE id = $2', [1, user.id])

        // Save user information in the MongoDB session
        req.session.isConnected = 'true';
        req.session.userId = user.id;
        req.session.username = user.pseudo;
        req.session.email = user.mail;
        req.session.avatar = user.avatar_url;
        req.session.lastLogin = new Date().toISOString();
        req.session.save();

        return res.status(200).json({ success: true, message: "test", session: req.session });
      } else {
        return res.status(401).json({ success: false, message: "Identifiants incorrects" });
      }
    })
    .catch(err => {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Erreur serveur. Veuillez réessayer plus tard." + err.message });
    })
})

export default loginRouter;
