import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBT27BsGwODzKK9cZOsdlFUoJPUbZEEXaE",
  authDomain: "beauty-527e1.firebaseapp.com",
  projectId: "beauty-527e1",
  storageBucket: "beauty-527e1.appspot.com",
  messagingSenderId: "612142504504",
  appId: "1:612142504504:web:00b9fe6b020bb8339a64cd",
  measurementId: "G-3B2QLS6M61",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const UploadAndGetValue = ({ image, setImageList }) => {
  // Create a reference to image or file
  const mountainImagesRef = ref(storage, `images/${image.name}`);
  uploadBytes(mountainImagesRef, image).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImageList(url);
    });
  });
};

export default UploadAndGetValue;
