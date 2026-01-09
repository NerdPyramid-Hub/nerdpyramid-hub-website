"use client";

import { useState } from "react";
import styles from "./DocumentsForm.module.css";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function DocumentsForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File) => {
    return ALLOWED_TYPES.includes(file.type);
  };

  const handleFile = (selectedFile: File | null) => {
    if (!selectedFile) return;

    if (!validateFile(selectedFile)) {
      setError("Only PDF or Word documents are allowed.");
      setFile(null);
      return;
    }

    setError(null);
    setFile(selectedFile);
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Upload Your Documents</h2>

      <div
        className={`${styles.dropbox} ${
          isDragging ? styles.dragging : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFile(e.dataTransfer.files[0]);
        }}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <input
          id="fileInput"
          type="file"
          hidden
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />

        {file ? (
          <p className={styles.fileName}>📄 {file.name}</p>
        ) : (
          <p>Drag & drop a PDF or Word document, or click to upload</p>
        )}
      </div>

      {error && <p style={{ color: "#dc2626", marginTop: "0.75rem" }}>{error}</p>}

      <button
        className={styles.button}
        type="submit"
        disabled={!file}
        style={{ opacity: file ? 1 : 0.6 }}
      >
        Submit Application
      </button>
    </form>
  );
}
