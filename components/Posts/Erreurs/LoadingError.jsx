import React from "react";

const LoadingError = ({ loading, error }) => {
  if (loading)
    return <div className="loading-message">Chargement des posts...</div>;
  if (error) return <div className="error-message">Erreur: {error}</div>;
  return null;
};

export default LoadingError;
