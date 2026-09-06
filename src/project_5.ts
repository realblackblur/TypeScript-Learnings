//Project: User Settings Object
type UserSettings = {
  readonly id: number;
  username: string;
  bio?: string;
  [key: string]: string | number | undefined;
};

const basicSettings: UserSettings = {
  id: 1,
  username: "blur",
};

const customSettings: UserSettings = {
  id: 2,
  username: "realblackblur",
  bio: "Building software and products.",
  theme: "dark",
  fontSize: "small",
};

function describeSettings(settings: UserSettings): string {
  const knownKeys = ["id", "username", "bio"];
  const customKeys = Object.keys(settings).filter(
    (key) => !knownKeys.includes(key)
  );

  return `Username: ${settings.username}, Custom preferences: ${customKeys.length}`;
}

console.log(describeSettings(basicSettings));
console.log(describeSettings(customSettings));
