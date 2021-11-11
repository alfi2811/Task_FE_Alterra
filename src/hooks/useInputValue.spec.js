import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("returns current initial value", () => {
    const { result } = renderHook(() => useInputValue("alfi"));
    expect(result.current.value).toEqual("alfi");
  });

  it("change value onchange method", () => {
    const { result } = renderHook(() => useInputValue("alfi"));

    act(() =>
      result.current.onChange({
        target: { value: "Angga" },
      })
    );
    expect(result.current.value).toEqual("Angga");
  });

  it("change value onchange method", () => {
    const { result } = renderHook(() => useInputValue("alfi"));

    act(() =>
      result.current.onChange({
        target: { innerText: "Angga" },
      })
    );
    expect(result.current.value).toEqual("Angga");
  });

  it("update value and rerendered it", () => {
    const { result, rerender } = renderHook(({ text }) => useInputValue(text), {
      initialValue: { text: "Alfi" },
    });

    rerender({ text: "Angga" });
    expect(result.current.value).toEqual("Angga");
  });
});
