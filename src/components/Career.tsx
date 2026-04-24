import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assessment Cell Specialist</h4>
                <h5>JCERT, Ratu Ranchi</h5>
              </div>
              <h3>3.6 Years</h3>
            </div>
            <p>
              Leading data analysis for assessment cell. Managing J-Guruji and e-Vidya Vahini ICT platforms. 
              Analyzing RAIL Exam reports and State Olympiad data. Overseeing DTH-TV educational content.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Account Cell Associate</h4>
                <h5>JCERT, Ratu Ranchi</h5>
              </div>
              <h3>1.5 Years</h3>
            </div>
            <p>
              Managed daily accounting records, financial transactions, and bank reconciliations. 
              Prepared vouchers, bills, and monthly financial reports while ensuring proper documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations Associate</h4>
                <h5>Uber Mining Pvt. Ltd.</h5>
              </div>
              <h3>1 Year</h3>
            </div>
            <p>
              Handled bill accountability, cash handling, and inventory records. 
              Managed store keeping and prepared payroll salary sheets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
