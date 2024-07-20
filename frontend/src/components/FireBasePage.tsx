
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

//   const handleSignIn = async () => {
//     try {
//       const result = await signInWithPopup( provider);
//       // You can get the Google Access Token and user information from result
//       const user = result.user;
//       console.log('User:', user);
//     } catch (error) {
//       console.error('Error signing in:', error);
//     }
//   };

  return (
    <button >
      Sign In with Google
    </button>
  );
};

export default SignInWithGoogle;
