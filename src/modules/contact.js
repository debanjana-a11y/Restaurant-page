import '../styles/contact.css';
import twitterLogo from '../assets/contact/twitter.png';
import instagramLogo from '../assets/contact/instagram.png';
import facebookLogo from '../assets/contact/facebook.png';

const loadContactPage = () => {
    // Delete old main
    const main = document.querySelector('main');
    main.innerHTML = "";

    // Add Contact Informations
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');
    // Review Form
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    const header = document.createElement('h2');
    header.innerText = "Write to us: ";
    header.classList.add('contactHeader');
    
    const form = document.createElement('form');
    form.classList.add('reviewForm');
    form.innerHTML =
    `<label for="fullName">Full Name</label><br>
            <input type="text" name="fullName"  id="fullName"><br>
            <label for="contactID">EmailID</label><br>
            <input type="text" name="contactID" id="contactID"><br>
            <label for="feedback">Feedback</label><br>
            <textarea id="feedback" name="feedback"></textarea><br>
            <input type="submit" value="Submit">
    `;

    reviews.appendChild(header);
    reviews.appendChild(form);
    contactPage.appendChild(reviews);

    // Address and Social Media
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contactDetails');

    const address = document.createElement('p');
    address.innerText = "Abbottstown, PA 17301, United States";
    address.classList.add('contactParagraph');
    contactDetails.appendChild(address);

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12246.226631534078!2d-76.99660056427294!3d39.88416757088743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c858148256411d%3A0x4b49b1cc3ecba35a!2sAbbottstown%2C%20PA%2017301%2C%20USA!5e0!3m2!1sen!2sin!4v1663695470076!5m2!1sen!2sin";
    iframe.src += `allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
    iframe.classList.add('geoLocation');
    contactDetails.appendChild(iframe);

    const socialMediaPage = document.createElement('div');
    socialMediaPage.classList.add('socialMediaPage');
    const banner = document.createElement('p');
    banner.innerText = "Follow Us";
    banner.classList.add('contactParagraph');
    
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('socialMedia');
    const twitterLink = new Image();
    twitterLink.src = twitterLogo; 
    const instagramLink = new Image();
    instagramLink.src = instagramLogo; 
    const facebookLink = new Image();
    facebookLink.src = facebookLogo; 
    socialMedia.appendChild(twitterLink);
    socialMedia.appendChild(instagramLink);
    socialMedia.appendChild(facebookLink);

    socialMediaPage.appendChild(banner);
    socialMediaPage.appendChild(socialMedia);

    contactDetails.appendChild(socialMediaPage);
    contactPage.appendChild(contactDetails);
    main.appendChild(contactPage);
}

export {loadContactPage};