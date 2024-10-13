import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";
import styles from "./Form.module.css";

interface SocialFormProps {
  onBack: () => void;
}

const SocialForm: React.FC<SocialFormProps> = ({ onBack }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formValues.name.trim(),
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    alert("Formulário enviado com sucesso!");
    setFormValues({ name: "", phone: "", email: "" });
  };

  return (
    <Box>
      <Typography
        className={styles.titleForm}
        variant="h3"
        fontFamily="sf pixelate"
      >
        Me siga nas Redes
      </Typography>
      <TextField
        className={styles.customTextField}
        label="Nome"
        name="name"
        fullWidth
        value={formValues.name}
        onChange={handleChange}
        required
        error={errors.name}
        helperText={errors.name ? "Este campo é obrigatório" : ""}
        placeholder="Seu nome"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        className={styles.customTextField}
        label="Telefone (opcional)"
        name="phone"
        fullWidth
        value={formValues.phone}
        onChange={handleChange}
        placeholder="Somente números"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        className={styles.customTextField}
        label="Email"
        name="email"
        fullWidth
        value={formValues.email}
        onChange={handleChange}
        required
        error={errors.email}
        helperText={errors.email ? "Este campo é obrigatório" : ""}
        placeholder="Seu email"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      {formValues.name && (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Box display="flex" justifyContent="center" marginBottom={4}>
            <a
              href="https://linkedin.com/in/diogosis"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s", margin: "0 10px" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            >
              <LinkedInIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <a
              href="https://github.com/DiogoSis"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s", margin: "0 10px" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            >
              <GitHubIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <a
              href="https://wa.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s", margin: "0 10px" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            >
              <WhatsAppIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <a
              href="https://t.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s", margin: "0 10px" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            >
              <TelegramIcon fontSize="large" style={{ color: "white" }} />
            </a>
            <a
              href="https://www.reddit.com/user/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transition: "transform 0.3s", margin: "0 10px" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            >
              <RedditIcon fontSize="large" style={{ color: "white" }} />
            </a>
          </Box>
        </Box>
      )}
      <Box>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ ml: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default SocialForm;
