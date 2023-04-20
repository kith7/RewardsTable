import { renderHook } from "@testing-library/react";
import useFetch from "./useFetch";

describe("useFetch hook", () => {
  it("has its default values", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current.usersData).toBe(null);
    expect(result.current.isPending).toBe(false);
    expect(result.current.hasError).toBe(false);
  });
  it("should exist", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current).toBeDefined();
  });

  it("should set is pending to true when running", async () => {
    const { result } = renderHook(() => useFetch("url"));
    expect(result.current.isPending).toBe(true);
  });
});
