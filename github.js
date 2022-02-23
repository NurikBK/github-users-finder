class Github {
  constructor() {
    this.client_id = 'e02cf68f6ca864b3d980';
    this.client_secret = '2fd0c2d23fc158e6ee52637d9523f93b9130ef65';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json()

    return {
      profile
    }
  }  
}