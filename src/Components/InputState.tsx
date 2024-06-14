import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormProps {}

interface FormState {
  answer: string;
  error: Error | null;
  status: 'typing' | 'submitting' | 'success';
}

export default function InputState(props: FormProps): JSX.Element {
  const [state, setState] = useState<FormState>({
    answer: '',
    error: null,
    status: 'typing',
  });

  if (state.status === 'success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setState({ ...state, status: 'submitting' });
    try {
      await submitForm(state.answer);
      setState({ ...state, status: 'success' });
    } catch (err: unknown) {
      setState({ ...state, status: 'typing' });
      if (err instanceof Error) {
        setState({ ...state, error: err });
      }
    }
  }

  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setState({ ...state, answer: e.target.value });
  }

  const { answer, error, status } = state;

  return (
    <>
      <h2>Emotion quiz</h2>
      <p>Happy Condition</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error !== null && (
          <p className="Error">
            {error.message}
          </p>
        )}
      </form>
    </>
  );
}

function submitForm(answer: string): Promise<void> {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError: boolean = answer.toLowerCase() !== 'happiness';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
