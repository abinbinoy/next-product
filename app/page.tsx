'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';

// formik validation schema using Yup 
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Number and one special case Character"
    ),
});
const page = () => {
  const onSubmit = (values: { username: string; password: string }) => {
    console.log('Form submitted with values:', values);
  };
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center lg:min-h-[calc(100vh-60px)]">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div className="relative">
                <label>Username</label>
                <Field
                  type="text"
                  name="username"
                  placeholder="email/username"
                  className="h-[40px] w-full rounded-md p-1 dark:text-gray-600"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="relative">
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="******"
                  className="h-[40px] w-full rounded-md p-1 dark:text-gray-600"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-500">No account?</p>
                  <p className="text-sm text-gray-500">
                    <Link href="/signup">
                      <span className="underline">Sign up</span>
                    </Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 h-[40px] w-[100px] rounded-md text-gray-50"
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>

      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="Welcome"
          src="https://wallpapercave.com/wp/wp5167329.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default page
