import type { ActionFunction } from '@remix-run/node';
import { redirect, json } from '@remix-run/node';
import { db } from '~/utils/db.server';
import { useActionData, useParams } from '@remix-run/react';
import { requireUserId } from '~/utils/session.server';

type ActionData = {
  formError?: string;
  fields?: { url?: string; title?: string; authorOfPost?: string };
  fieldErrors?: { url?: string; title?: string; authorOfPost?: string };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

function validateUrl(url: string) {
  let regEx =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;

  const isValid = regEx.test(url);
  if (!isValid) {
    return 'Url must be valid';
  }
}
function validateTitle(title: string) {
  if (title.length < 4) {
    return 'Title must be at least 4 characters';
  }
}

function validateAuthor(author: string) {
  if (author.length < 4) {
    return 'Author must be at least 4 characters';
  }
}

export let action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  let form = await request.formData();
  console.log(form);
  let topic = form.get('topic');
  let url = form.get('url');
  let title = form.get('title');
  let authorOfPost = form.get('author');

  // Validation here for format of fields:
  if (
    typeof topic !== 'string' ||
    typeof url !== 'string' ||
    typeof title !== 'string' ||
    typeof authorOfPost !== 'string'
  ) {
    return badRequest({
      formError: 'Form submitted incorrectly',
    });
  }

  let fieldErrors = {
    url: validateUrl(url),
    title: validateTitle(title),
    authorOfPost: validateAuthor(authorOfPost),
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields: { url, title, authorOfPost } });
  }

  // Validation for existing url in database
  const exists = await db.post.findFirst({
    where: {
      topic: topic,
      url: url,
    },
  });

  // The topics in the database are lowercase
  topic = topic.toLowerCase();

  const fields = { topic, url, title, authorOfPost };

  if (!exists) {
    await db.post.create({
      data: { ...fields, posterId: userId },
    });

    return redirect(`/learn/${topic}`);
  } else {
    throw new Error('Article already exists');
  }
};

export default function New() {
  let actionData = useActionData<ActionData>();
  console.log(actionData);
  const params = useParams();
  let topic = params.topicId;
  topic = topic && topic[0].toUpperCase() + topic.substring(1);

  interface IFormInput {
    id: string;
    name: string;
    type: string;
    // value: string;
    defaultValue?: string;
    placeholder?: string;
  }

  function FormInput({
    id,
    name,
    type,
    defaultValue,
    placeholder,
  }: IFormInput) {
    const error = !!defaultValue;

    return (
      <input
        defaultValue={defaultValue}
        className={`bg-transparent shadow appearance-none border-2 border-gray-600  rounded w-full py-4 px-3 text-gray-200 leading-tight 
        focus:outline-none focus:shadow-outline 
          focus:border-white hover:border-white
        
        ${error && 'border-red-600'}`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    );
  }

  // We need to show the word as capitalized

  return (
    <>
      <div className="w-full max-w-xs">
        <form method="post" className="shadow-md rounded pt-4 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="flex pointer-events-none  text-lg font-bold mb-2"
              htmlFor="topic"
            >
              Topic
            </label>
            <input
              className={`shadow border-2 bg-transparent border-gray-600 text-gray-200 appearance-none  rounded w-full py-4 px-3  leading-tight
              focus:outline-none focus:shadow-outline focus:border-white hover:border-white
                ${topic && ' cursor-not-allowed'} `}
              id="topic"
              name="topic"
              type="text"
              value={topic}
              readOnly
              contentEditable={!!topic}
            />
          </div>
          <div className="mb-4">
            <label
              className="flex pointer-events-none text-lg font-bold mb-2"
              htmlFor="url"
            >
              URL
            </label>
            <FormInput
              defaultValue={actionData?.fields?.url}
              id="url"
              name="url"
              type="url"
              placeholder="https://overreacted.io/"
            />

            {actionData?.fieldErrors?.url ? (
              <div className="flex ">
                <span className="text-red-600  text-md">
                  ❗️ {actionData?.fieldErrors?.url}
                </span>
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="flex pointer-events-none  text-lg font-bold mb-2"
              htmlFor="title"
            >
              Article Title
            </label>

            <FormInput
              defaultValue={actionData?.fields?.title}
              id="title"
              type="text"
              name="title"
              placeholder="Why React hooks are awesome"
            />
            {actionData?.fieldErrors?.title ? (
              <div className="flex ">
                <span className="text-red-600 text-md">
                  ❗️ {actionData?.fieldErrors?.title}
                </span>
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="flex pointer-events-none text-lg font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>

            <FormInput
              defaultValue={actionData?.fields?.authorOfPost}
              id="author"
              type="text"
              name="author"
              placeholder="Dan Abramov"
            />
            {actionData?.fieldErrors?.authorOfPost ? (
              <div className="flex ">
                <span className="text-red-600 text-md">
                  ❗️ {actionData?.fieldErrors?.authorOfPost}
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              className=" bg-accent-pink w-full hover:brightness-110 border-2 border-solid border-accent-pink hover:border-white active:border-white text-white font-bold mt-8 py-4 px-4 rounded focus:outline-none focus:border-white focus:shadow-outline"
              type="submit"
            >
              Submit Article
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
