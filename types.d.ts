type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  [key?: string]: string;
};

type PostItems = {
  title: string;
  body: string;
  userId: number;
  applied: boolean;
  email: string;
  desc: string;
  date: string;
};

type CommentItems = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
