import './main.css';

function Main() {
  return (
    <div className="main-page">
      <header className="page-header">
       <div id="header-props">
        <span id='logo'>NETFLIX</span>
        <div id='sign-in-btn'>
         <span id='sign-in'>sign In</span> 
        </div>
       </div>
      </header>
      <div id='main-page-content'>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or start your membership.</p>
        <div id='email-to-start'>
          <input type='text' name='email'/>
          <button id='get-started'>
            <span id='get-started-text'>
              Get Started<i className="fa-solid fa-angle-up fa-rotate-90"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
