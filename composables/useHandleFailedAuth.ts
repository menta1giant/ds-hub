export function useHandleFailedAuth() {
  const router = useRouter();
  // DISPLAY FAILED AUTH ERROR
  router.push("/login");
}
