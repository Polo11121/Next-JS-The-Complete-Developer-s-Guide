"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "@nextui-org/react";
import { FormButton, FormTextarea } from "@/components";
import { createComment } from "@/actions";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export const CreateCommentForm = ({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) => {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    createComment.bind(null, { postId, parentId }),
    { errors: {}, success: false }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 px-1">
        <FormTextarea
          name="content"
          label="Reply"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
        />
        {formState.errors._form ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}
        <FormButton>Create Comment</FormButton>
      </div>
    </form>
  );

  return (
    <div>
      <Button size="sm" variant="light" onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && form}
    </div>
  );
};
