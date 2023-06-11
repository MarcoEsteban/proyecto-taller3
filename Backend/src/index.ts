import app from './app';

// Start server:
app.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`);
})