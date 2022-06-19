import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (<>
            <div className="footer container-fluid">
              <div className="row">
                  <div className="footer-redes col">
                      <p className="footer-texto">Seguinos en nuestras redes sociales:</p>
                      <div className="redes-icon">
                          <Link to="http://www.facebook.com"><img src="/assets/facebook.png" alt="Facebook" className="iconoredes" /></Link>
                          <Link to="http://www.instagram.com"><img src="/assets/instagram.png" alt="Instagram" className="iconoredes" /></Link>
                      </div>
                  </div>
              </div>
              <p className="copyright">© Copyright - Santiago Villalba - 2022</p>
            </div>
          </>)
}
