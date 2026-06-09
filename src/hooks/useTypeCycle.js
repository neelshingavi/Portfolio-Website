import { useEffect, useState } from 'react';

export function useTypeCycle(words, hold = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === '';
    const delay = doneTyping ? hold : deleting ? 34 : 54;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setIndex((value) => value + 1);
        return;
      }

      setText((value) => {
        const nextLength = deleting ? value.length - 1 : value.length + 1;
        return current.slice(0, nextLength);
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, hold, index, text, words]);

  return text;
}
