import React, { useState } from 'react';
import { Box, Button, TextField, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name,
        email,
        message,
      };

      emailjs.send(
        'service_my82gim',
        'template_ere6alp',
        templateParams,
        '_maC6OM4iuHthTrOQ'
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSnackbarMessage('Mensaje enviado exitosamente!');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setSnackbarMessage('Error al enviar el correo. Por favor intenta de nuevo.');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
        }
      );

      // Clear the form after submitting
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setSnackbarMessage('Por favor completa los campos.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contáctame</h1>
          <Box component="form" noValidate autoComplete="off" onSubmit={sendEmail} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              required
              label="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#333',  // Fondo oscuro para los campos
                  color: '#fff',  // Color blanco para el texto
                },
                '& .MuiFormLabel-root': {
                  color: '#fff', // Color blanco para la etiqueta del campo
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#00bcd4', // Color para el borde cuando está enfocado
                },
              }}
            />
            <TextField
              required
              label="Email / Teléfono"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              error={emailError}
              helperText={emailError ? "Please enter your email or phone number" : ""}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#333',
                  color: '#fff',
                },
                '& .MuiFormLabel-root': {
                  color: '#fff',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#00bcd4',
                },
              }}
            />
            <TextField
              required
              label="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#333',
                  color: '#fff',
                },
                '& .MuiFormLabel-root': {
                  color: '#fff',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#00bcd4',
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              sx={{
                backgroundColor: '#00bcd4',  // Color del botón
                '&:hover': {
                  backgroundColor: '#0097a7',  // Color al pasar el mouse
                },
                color: '#fff',  // Color blanco para el texto del botón
                marginTop: 2,
              }}
            >
              Enviar
            </Button>
          </Box>

          {/* Snackbar para mostrar el mensaje de éxito o error */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
