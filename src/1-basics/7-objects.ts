let employee: {
  readonly id: number;
  name: string;
  retire: (data: Date) => void; // method defenition only
} = {
  id: 1,
  name: "adheesha",

  // method implementation
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.id = 2;    // compile-error -> id property is read-only
