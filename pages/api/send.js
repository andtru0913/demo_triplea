export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { telephone } = req.body;

    // Validate required fields
    if (!telephone) {
      return res.status(400).json({ 
        message: 'Telefonnummer är obligatoriskt' 
      });
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    if (!phoneRegex.test(telephone)) {
      return res.status(400).json({ 
        message: 'Ogiltigt telefonnummer format' 
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    // 4. Log the submission
    
    console.log('Form submission received:', {
      telephone,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Simulate processing time
    // In real implementation, you might:
    // - await saveToDatabase(telephone);
    // - await sendEmailNotification(telephone);
    // - await sendToCRM(telephone);

    // Return success response
    res.status(200).json({ 
      message: 'Tack för ditt intresse! Vi kommer att kontakta dig snart.',
      success: true 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ 
      message: 'Ett fel uppstod. Försök igen senare.',
      success: false 
    });
  }
}
