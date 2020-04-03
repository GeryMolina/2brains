import App from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCiHCo0360-CD46NEIYd4TN5B5e3WLpvfM",
  authDomain: "braintest-27531.firebaseapp.com",
  databaseURL: "https://braintest-27531.firebaseio.com",
  projectId: "braintest-27531",
  storageBucket: "braintest-27531.appspot.com",
  messagingSenderId: "931024317669",
  appId: "1:931024317669:web:7ea11e2b4ea454b8cff80c"
};

class Firebase {
  constructor() {
    App.initializeApp(config);
    this.auth = App.auth();
  
  }

  // sign in 
  async signIn(email, password, name) {
    await this.auth.createUserWithEmailAndPassword(email, password).catch(err => {
      console.log(err);
    });

    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  // log in 

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  
  // logout 

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.currentUser();
  }
  authChange(user) {
    return this.auth.onAuthStateChanged(user);
  }
}
export default new Firebase();