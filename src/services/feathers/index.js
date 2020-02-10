import {client} from './config';

//FEATHERS SERVICES
export const auth = client.service('authentication');
export const users = client.service('users');
export const blogs = client.service('blogs');
export const currentUser = client.service('user-current');
export const articles = client.service('articles');
export const tagArticle = client.service('articles-tags');
export const categories = client.service('categories');
export const ratings = client.service('ratings');
export const tagsBlog = client.service('blogs-tags');
export const tags = client.service('blogs-tags');
export const guides = client.service('guides');
export const growths = client.service('growths');
export const childrens = client.service('childrens');

// LOGIN AND AUTH METHODS

export const login = async (email, password) => {
  try {
    // First try to log in with an     JWT
  } catch (error) {
    alert(error);
    // If that errors, log in with email/password
    // Here we would normally show a login page
    // to get the login information
  }
};

export const logout = async () => {
  await client.logout();
};
