const Reload = (value) => {
  if (value)
    setTimeout(() => {
      return window.location.reload(false);
    }, 100);
};

export default Reload;
