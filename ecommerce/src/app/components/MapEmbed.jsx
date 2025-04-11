const MapEmbed = () => {
    return (
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19744.405383392554!2d38.79117067841152!3d9.019739534628593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855cd643a691%3A0x5ce3922436b4f99a!2sMegenagna!5e0!3m2!1sen!2set!4v1729778090864!5m2!1sen!2set" 
          width="600" 
          height="320" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        ></iframe>
      </div>
    );
  };
  
  export default MapEmbed;