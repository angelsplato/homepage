"use client";

import { useSyncExternalStore } from "react";

const EMAIL_PARTS = ["maku", "werere", "angels", "@", "gmail", ".com"];

function subscribe() {
  return () => {};
}

function getClientEmail() {
  return EMAIL_PARTS.join("");
}

function getServerEmail() {
  return "";
}

export function EmailLink() {
  const address = useSyncExternalStore(
    subscribe,
    getClientEmail,
    getServerEmail,
  );
  const revealed = address.length > 0;

  return (
    <>
      <a
        id="contact-email"
        href={revealed ? "mai" + "lto:" + address : undefined}
        aria-label={revealed ? "Email " + address : "Email Angels"}
      >
        {revealed ? address : "Email Angels"}
      </a>
      {revealed ? null : (
        <noscript>(makuwerereangels [at] gmail [dot] com)</noscript>
      )}{" "}
      via email
    </>
  );
}
