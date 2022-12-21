import React from "react";

type ContentContainerProps = {
  children: React.ReactNode;
};

const styles = {
  container: {
    maxWidth: 1200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
  },
};

export const ContentContainer = ({ children }: ContentContainerProps) => (
  <div style={styles.container}>{children}</div>
);
