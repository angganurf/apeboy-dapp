import { ReactNode, useRef, useEffect } from 'react';

export function BuyButton({
  submit,
  submitDisabled,
  submitLabel,
}: {
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // useEffect(() => {
  //   if (!dialogRef.current) return;
  //   if (show) {
  //     dialogRef.current.showModal();
  //   } else {
  //     dialogRef.current.close();
  //   }
  // }, [show, dialogRef]);

  return (
    <div className="flex justify-center pt-2">
      {submit ? (
        <button className="card" onClick={submit} disabled={submitDisabled}>
          {submitLabel || 'buy $apeboy'}
        </button>
      ) : null}
    </div>
  );
}
