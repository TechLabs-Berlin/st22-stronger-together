import "./ProfilePage.css";

function ProfilePage() {
  return (
    <main>
      <div className="left_section">
        <section className="your_profile">
          <p>Your Profile</p>

          <div className="profile">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="profile_pictre"
              />
            </div>
            <div className="name">
              <p>Name</p>
              <p>Gender</p>
            </div>
          </div>
        </section>

        <section className="info">
          <div className="basic_info">
            <p>Basic info:</p>
          </div>
          <div className="looking_for">
            <p>Looking for:</p>
          </div>
          <div className="interests">
            <p>Interests:</p>
          </div>
          <div className="about_you">
            <p>About you:</p>
          </div>
          <div className="you_offer">
            <p>You offer:</p>
          </div>
        </section>
      </div>
      <div>
        <section className="social">
          <div className="feed">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgY3rt9YMW4Aegg6KStmJouNwYrHU2ouANQ&usqp=CAU"
              alt="feed"
            />
            <p>Feed</p>
          </div>
          <div className="feed">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCDUmAd7Ud2Fo0rh8246Swj724pU6C8EM_ueL3yHIX_iOBopmrS5UBsavXP5rpytqhD0&usqp=CAU"
              alt="hangouts"
            />
            <p>Hangouts</p>
          </div>
          <div className="feed">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XkHQ-lfm9-qRktmMEusV18iNp8jSx8BNXw&usqp=CAU"
              alt="marketplace"
            />
            <p>Marketplace</p>
          </div>
          <div className="feed">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iLSnsuVSmlllWVciWKy-9kXXCkqWXahkNrqVN00rzzwNkh0gvL_ShLC-BiS5Nh-CPXI&usqp=CAU"
              alt="chat"
            />
            <p>Chat</p>
          </div>
          <div className="feed">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2LcYq7uaPqS5ViB5BmnM30h6pvoTRYuOsg&usqp=CAU"
              alt="blog"
            />
            <p>Blog</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProfilePage;
