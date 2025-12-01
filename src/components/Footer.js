import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);

  const openTerms = (e) => {
    e.preventDefault();
    setShowTerms(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTerms = () => {
    setShowTerms(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={process.env.PUBLIC_URL + '/assets/logoC.png'} alt="VRM Groups" />
            </div>
            <p className="footer-description">
              Leading construction and infrastructure company committed to delivering 
              excellence through sustainable and innovative building solutions.
            </p>
            <div className="social-links">
              {/* <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a> */}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Building Materials</a></li>
              <li><a href="#services">Electrical Solutions</a></li>
              <li><a href="#services">Plumbing Works</a></li>
              <li><a href="#services">Finishing & Interiors</a></li>
              <li><a href="#services">Infrastructure</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <span className="icon">📍</span>
                15th Cross, A Block No.27, Ground Floor, Bhuvaneshwari Nagar, Magadi Main Road, Bangalore - 560091
              </li>
              <li>
                <span className="icon">📞</span>
                +91 9900315454
              </li>
              <li>
                <span className="icon">✉️</span>
                info@vrmgroups.com
              </li>
              <li>
                <span className="icon">🌐</span>
                www.vrmgroups.com
              </li>
              <li>
                <span className="icon">📋</span>
                GSTIN: 29ATHPV3440K1Z5
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} VRM Groups. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#terms" onClick={openTerms}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>

    {/* Terms & Conditions Modal */}
    {showTerms && (
      <div className="modal-overlay" onClick={closeTerms}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeTerms}>×</button>
          
          <div className="terms-modal-content">
            <h1>Terms & Conditions</h1>
            <p className="terms-intro">
              ARTICLES OF AGREEMENT - Construction Contract Terms
            </p>

            <section className="terms-section">
              <h2>SCOPE OF WORKS IN THE PROJECT</h2>
              <p>
                VRM Groups provides comprehensive construction services including Pre-engineered Buildings (PEB), 
                civil works, structural works, and complete project execution as per engineering specifications and IS codes.
              </p>
            </section>

            <section className="terms-section">
              <h2>CIVIL SCOPE OF WORK</h2>
              <h3>Foundation</h3>
              <ul>
                <li>Earth work excavation for foundations and footings up to hard soil</li>
                <li>Providing and laying 4" thick PCC 1:4:8 for foundation bed</li>
                <li>Constructing of S.S.M. in foundation in CM 1:8</li>
                <li>SSM Below Ground level - 2'6" depth (as per design & drawing)</li>
                <li>SSM Above Ground level - 4'0" height (as per design & drawing)</li>
                <li>RCC grade M20 for plinth beam including form work</li>
              </ul>

              <h3>R.C.C. Works</h3>
              <p>
                Providing and laying machine mixed cement concrete of M20 grade using 20mm and down size 
                graded granite aggregates and M sand at all levels including scaffolding, shuttering, 
                reinforcement, barbending, vibrating of concrete for:
              </p>
              <ul>
                <li>Columns and footings</li>
                <li>Plinth beam</li>
                <li>RCC retaining wall</li>
                <li>Lintels beams</li>
                <li>Roof slab & Beam</li>
              </ul>

              <h3>Masonry</h3>
              <p>
                Providing and constructing loft high masonry wall in superstructure of 6" thick wall 
                with good quality solid blocks in CM 1:6 including curing scaffolding.
              </p>

              <h3>Flooring Work</h3>
              <ul>
                <li>Providing & laying soling work with soil filling using 10 Ton Roller</li>
                <li>VDF 4" Thk concrete with smooth cement finishing</li>
                <li>Finished floor level as 4'0" from ground level</li>
              </ul>

              <h3>Plastering and Painting</h3>
              <ul>
                <li>Internal surfaces plastering with CM 1:6 on one coat</li>
                <li>External surfaces plastering in CM 1:6</li>
                <li>2 coats of suryacem at all heights</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>STEEL STRUCTURE - ROOFING AND TRUSS WORKS</h2>
              <ul>
                <li>Truss works as per structural drawings (TATA STEEL, JINDAL, SAIL)</li>
                <li>2/C HR Purlins will be used</li>
                <li>Zinc coated galvanized (PPGL) sheet for roofing and cladding</li>
                <li>All structural members with primer and enamel paint</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>QUALITY STANDARDS - PEB BUILDING</h2>
              <p>
                Quality standards strictly followed in line with relevant IS standards, verified and 
                certified by Quality Control Department.
              </p>

              <h3>Design Criteria</h3>
              <ul>
                <li>Dead Load: As per sheet Thickness 0.5 Kn/M²</li>
                <li>Live Load: As per IS 875 part II</li>
                <li>Wind Speed: As per IS 875 part III</li>
                <li>Design Code for Steel: IS 800-2007, IS 800-1984</li>
                <li>Design Code for Concrete: IS 456-2000</li>
                <li>Software: STAAD, AutoCAD, RC-DC</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>SPECIFICATION OF MATERIALS USED</h2>
              <ul>
                <li>Cement: Penna, Zuari, BIRLA SUPER, BIRLA ULTRATEC</li>
                <li>TMT Steel: ISI TOR STEEL</li>
                <li>PEB: JINDAL STEEL, TATA STEEL, SAIL</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>CONDITIONS OF CONTRACT</h2>
              
              <h3>1. INTERPRETATION</h3>
              <p>
                This "Contract" shall comprise of the Articles of Agreement, the Conditions of Contract, 
                the Schedule of quantities, Specifications and Drawings. "Work" or "Works" shall mean all 
                work defined by Schedule of Quantities, Drawings, Specifications.
              </p>

              <h3>2. SCOPE OF THE CONTRACT</h3>
              <p>
                The Contractor shall carry out and complete the works in every respect in accordance with 
                this contract and in accordance with the directions of the Employer and to the satisfaction 
                of the Employer/authorized representative.
              </p>

              <h3>3. DRAWINGS AND SPECIFICATIONS</h3>
              <p>
                Complete sets of the drawings, specifications and schedule of quantities shall be furnished 
                by the contractors to the Employer for approval from time to time as the work progresses.
              </p>

              <h3>4. CONTRACTOR TO PROVIDE EVERYTHING NECESSARY</h3>
              <p>
                The contractor shall provide everything necessary for the proper execution of the work 
                according to the intent and meaning of the Drawings, Price schedule of Quantities and 
                Specifications.
              </p>

              <h3>5. AUTHORITIES, NOTICES AND PAYMENTS</h3>
              <p>
                The Contractor shall indemnify the Employer against all patent rights, mistakes in setting 
                out, mishaps in construction and injury to workmen, damage to persons and property. The 
                contractor will get their workmen insured under workmen's compensation Act.
              </p>

              <h3>6. SETTING OUT WORKS</h3>
              <p>
                The contractors shall set out the works and shall be responsible for the true and perfect 
                setting out of the same and for the correctness of the positions, levels, dimensions and 
                alignment.
              </p>

              <h3>7. ALTERATIONS, ADDITIONS AND OMISSIONS</h3>
              <p>
                The Employer shall have the power to make any variation of the quality or quantity of the 
                works based on mutual consent and agreed rates.
              </p>

              <h3>8. MATERIALS AND WORKMANSHIP</h3>
              <p>
                All materials and workmanship shall be of respective kinds and quality described in the 
                specifications. The Employer shall have the power of ordering removal of any material 
                considered defective.
              </p>

              <h3>9. SAMPLES</h3>
              <p>
                Before ordering materials, the contractor shall get samples approved. The contractor shall 
                furnish samples at his own cost for approval. All samples for testing shall be supplied by 
                the contractor.
              </p>

              <h3>10. FAULTY MATERIALS AND WORK</h3>
              <p>
                The Employer shall have power to order removal of any materials/workmanship not in accordance 
                with specifications. The contractor shall carry out such orders at his own cost.
              </p>

              <h3>11. SUPERVISION AND FOREMAN</h3>
              <p>
                The contractor shall employ a fulltime competent supervisor/Engineer with minimum 1 years' 
                experience, approved by the Employer, who shall be constantly in attendance.
              </p>

              <h3>12. DATE OF COMMENCEMENT AND COMPLETION</h3>
              <p>
                The Contractor shall commence work on the agreed date and complete the same within the 
                specified period subject to provisions for extension of time. Time being the essence of 
                the contract.
              </p>

              <h3>13. ASSIGNMENT</h3>
              <p>
                The contractor shall not transfer, assign or underlet the contract without written consent 
                of the Employer. No subletting shall relieve the contractor from full responsibility.
              </p>
            </section>

            <section className="terms-section">
              <h2>PAYMENT SCHEDULE</h2>
              <ul>
                <li>30% as advance along with the work order</li>
                <li>30% completion of plinth beam and related civil works</li>
                <li>20% when fabricated material is ready for erection</li>
                <li>10% completion of erection of structural and sheeting</li>
                <li>10% completion of sheeting</li>
              </ul>
              <p className="terms-note">
                GST @ 18% of the contract value shall be extra. Change in basic rates up to +/- 5% 
                shall be considered for revision at time of execution.
              </p>
            </section>

            <section className="terms-section">
              <h2>JURISDICTION</h2>
              <p>
                All disputes arising out or in any way connected with this agreement shall be deemed to 
                have arisen and only courts in Bangalore shall have the jurisdiction to entertain and 
                determine the same.
              </p>
            </section>

            <div className="terms-footer">
              <p>
                For complete terms and conditions, project specifications, and detailed quotations, 
                please contact VRM Groups.
              </p>
              <p className="terms-contact">
                📞 +91 9900315454 | ✉️ info@vrmgroups.com | 🌐 www.vrmgroups.com
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Footer;
