import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [contactType, setContactType] = useState<string>('Freelance Service');
  const [companyName, setCompanyName] = useState<string>('');
  const [formValues, setFormValues] = useState<{ name: string; email: string; phone: string; message: string }>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name: boolean; email: boolean; phone: boolean }>({ name: false, email: false, phone: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleContactTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactType((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value === 'Job Offer') {
      setCompanyName('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, phone } = formValues;
    const nameError = !name.trim();
    const emailError = !email.trim();
    const phoneError = !phone.trim();
    
    setErrors({ name: nameError, email: emailError, phone: phoneError });

    if (!nameError && !emailError && !phoneError) {
      alert('Formulário enviado com sucesso!');
      // Aqui você pode adicionar a lógica para enviar o formulário
      // Resetando o formulário
      setFormValues({ name: '', email: '', phone: '', message: '' });
      setCompanyName('');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom className={styles.title}>
        Contato
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Box mb={2}>
          <TextField
            label="Nome"
            name="name"
            fullWidth
            required
            value={formValues.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? 'Nome é obrigatório' : ''}
            InputLabelProps={{ className: styles.label }}
            InputProps={{ className: styles.input }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? 'Email é obrigatório' : ''}
            InputLabelProps={{ className: styles.label }}
            InputProps={{ className: styles.input }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Telefone"
            name="phone"
            fullWidth
            required
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={errors.phone ? 'Telefone é obrigatório' : ''}
            InputLabelProps={{ className: styles.label }}
            InputProps={{ className: styles.input }}
          />
        </Box>
        <Box mb={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={styles.formLabel}>Tipo de Contato</FormLabel>
            <RadioGroup value={contactType} onChange={handleContactTypeChange}>
              <FormControlLabel value="Freelance Service" control={<Radio />} label="Serviço Freelance" />
              <FormControlLabel value="Job Offer" control={<Radio />} label="Oferta de Emprego" />
              <FormControlLabel value="Friendship Message" control={<Radio />} label="Mensagem de Amizade" />
            </RadioGroup>
          </FormControl>
        </Box>
        {contactType === 'Job Offer' && (
          <Box mb={2}>
            <TextField
              label="Nome da Empresa"
              name="companyName"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              InputLabelProps={{ className: styles.label }}
              InputProps={{ className: styles.input }}
            />
          </Box>
        )}
        <Box mb={2}>
          <TextField
            label="Mensagem"
            name="message"
            multiline
            rows={4}
            fullWidth
            value={formValues.message}
            onChange={handleChange}
            InputLabelProps={{ className: styles.label }}
            InputProps={{ className: styles.input }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">Enviar</Button>
      </form>
    </Container>
  );
};

export default Contact;
