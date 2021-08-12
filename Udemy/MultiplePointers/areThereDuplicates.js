function areThereDuplicates(...args) {
  const unique = [...new Set(args)];
  //   console.log(arguments);
  //   console.log(typeof arguments);
  //   console.log(unique);
  //   console.log(typeof unique);

  if (args.length != unique.length) {
    return true;
  } else return false;
}

areThereDuplicates(1, 2, 3);
