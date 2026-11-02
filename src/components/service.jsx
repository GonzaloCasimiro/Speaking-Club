
import emailjs from '@emailjs/browser';

const responderForm = async (datos) => {
    const params = {
        user_name: datos.nombre,
        user_email: datos.email,
        motivo: datos.motivo,
    };
    const serviceId = "service_4f0znp7";
    const templateId = "template_fgkrwe8"
    const publicKey = 'u-8UYRAwatSg1pM2e';

    return await emailjs.send(serviceId, templateId, params, publicKey)
};
export default responderForm