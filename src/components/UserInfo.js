export default class UserInfo {

  constructor({ selectorProfileName, selectorProfileJob, selectorProfileAvatar }) {
    this._profileName = document.querySelector(selectorProfileName);
    this._profileJob = document.querySelector(selectorProfileJob);
    this._profileAvatar = document.querySelector(selectorProfileAvatar);
  }

  getUserId() {
    return this._userId;
  }

  setUserId(userInfo) {
    this._userId = userInfo._id;
  }

  getUserInfo() {
    this.currentData = { name: this._profileName.textContent, job: this._profileJob.textContent };
    return this.currentData;
  }

  setUserInfo(userInfo) {
    if (userInfo.name) {
      this._profileName.textContent = userInfo.name;
    }
    if (userInfo.about) {
      this._profileJob.textContent = userInfo.about;
    }
  }

  updateAvatar(newAvatar) {
    if (newAvatar.avatar) {
      this._profileAvatar.src = newAvatar.avatar;
    }
  }
}
