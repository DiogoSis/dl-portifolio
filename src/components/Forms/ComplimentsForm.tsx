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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      tip: !formValues.tip.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    alert("Formulário enviado com sucesso!");
    setFormValues({ name: "", phone: "", email: "", tip: "" });
  };

  return (
    <Box>
        <Typography 
            className={styles.titleForm} 
            variant="h3"
            fontFamily="sf pixelate"
        >Elogios ou Ideias</Typography>
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
          disabled={!formValues.tip.trim()}
          sx={{ ml: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default ComplimentsForm;
