import {
  PromptInput,
  PromptInputHeader,
  PromptInputAttachments,
  PromptInputAttachment,
  PromptInputBody,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputButton,
} from "@/components/ai-elements/prompt-input";

import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import { useChat } from "@ai-sdk/react";

import { useRef, useState } from "react";

export function ChatPrompt() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");

  //const { messages, status, sendMessage } = useChat();

  const askQuestion = async (
    message: PromptInputMessage,
    event: FormEvent<HTMLFormElement>,
  ) => {
    // await sendMessage(question);
  };

  return (
    <PromptInput
      onSubmit={askQuestion}
      className="mt-4 rounded-4xl border border-white/20 bg-white/20 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_45px_rgba(15,23,42,0.65)]
"
      globalDrop
      multiple
    >
      <PromptInputHeader>
        <PromptInputAttachments>
          {(attachment) => <PromptInputAttachment data={attachment} />}
        </PromptInputAttachments>
      </PromptInputHeader>
      <PromptInputBody>
        <PromptInputTextarea
          onChange={(e) => setText(e.target.value)}
          ref={textareaRef}
          value={text}
        />
      </PromptInputBody>
      <PromptInputFooter>
        <PromptInputButton type="submit" disabled={!text}>
          Send
        </PromptInputButton>
      </PromptInputFooter>
    </PromptInput>
  );
}
