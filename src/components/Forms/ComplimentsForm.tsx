import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./Form.module.css";

interface ComplimentsFormProps {
  onBack: () => void;
}

const ComplimentsForm: React.FC<ComplimentsFormProps> = ({ onBack }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    tip: "",
  });
  const [errors, setErrors] = useState({
    tip: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);  // Para controle de carregamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      tip: !formValues.tip.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar dados ao seu webhook
      const response = await fetch("https://o18752p0ch.execute-api.us-east-1.amazonaws.com/prod/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        setFormValues({ name: "", phone: "", email: "", tip: "" });
      } else {
        alert("Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }

    setIsSubmitting(false);
  };

  return (
    <Box>
      <Typography className={styles.titleForm} variant="h3" fontFamily="sf pixelate">
        Elogios ou Ideias
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          className={styles.customTextField}
          label="Nome ou Nick"
          name="name"
          fullWidth
          value={formValues.name}
          onChange={handleChange}
          placeholder="Coloque seu Nome ou Apelido"
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "#00ff00" },
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          value={formValues.phone}
          onChange={handleChange}
          className={styles.customTextField}
          label="Telefone"
          name="phone"
          inputMode="numeric"
          fullWidth
          placeholder="Coloque seu Whatsapp"
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
          placeholder="Seu email (opcional)"
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
          label="Dica"
          name="tip"
          fullWidth
          multiline
          rows={4}
          value={formValues.tip}
          onChange={handleChange}
          placeholder="Escreva sua dica aqui (obrigatório)"
          required
          error={errors.tip}
          helperText={errors.tip ? "Este campo é obrigatório" : ""}
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "#00ff00" },
          }}
        />
        <Box mt={2}>
          <Button variant="outlined" onClick={onBack}>
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={!formValues.tip.trim() || isSubmitting}
            sx={{ ml: 2 }}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ComplimentsForm;
