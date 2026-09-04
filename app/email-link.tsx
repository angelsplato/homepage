"use client";

import { useEffect, useRef } from "react";

export function EmailLink() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const address = ["maku", "werere", "angels", "@", "gmail", ".com"].join("");
    el.href = "mai" + "lto:" + address;
    el.textContent = address;
    el.setAttribute("aria-label", "Email " + address);
  }, []);

  return (
    <>
      <a ref={ref} id="contact-email" aria-label="Email Angels">
        Email Angels
      </a>
      <noscript>(makuwerereangels [at] gmail [dot] com)</noscript> via email
    </>
  );
}
