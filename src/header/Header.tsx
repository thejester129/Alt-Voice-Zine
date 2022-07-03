const styles: any = {
  title: {
    fontSize: 30,
    fontWeight: 600,
    paddingTop: 40,
    textAlign: "center" as const,
    height: "7vh",
    background: "black",
    color: "pink",
  },
};

export default (props: any) => {
  return (
    <>
      <div style={styles.title}>ALT / VOICE / ZINE</div>
      <div style={{ background: "black", width: "100%", height: 2 }}></div>
    </>
  );
};
