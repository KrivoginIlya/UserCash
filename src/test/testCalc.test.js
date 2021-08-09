import { mount } from "@vue/test-utils";
import Calculete from "../components/Calculete";

describe("Test Calculator", () => {
  it("Test value operand1 operand2", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1]");
    operand1Input.setValue(2);

    const operand2Input = wrapper.find("input[name = operand2]");
    operand2Input.setValue(8);

    const buttonOp = wrapper.find("button[name = '+']");
    buttonOp.trigger("click");

    expect(wrapper.vm.result).toBe(10);
  });
  it("Test value operand1 operand2", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1 ]");
    operand1Input.setValue(8);

    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue(2);

    const buttonOp = wrapper.find("button[name = '-']");
    buttonOp.trigger("click");

    expect(wrapper.vm.result).toBe(6);
  });
  it("Test value operand1 operand2", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1 ]");
    operand1Input.setValue(3);

    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue(6);

    const buttonOp = wrapper.find("button[name = '*']");
    buttonOp.trigger("click");

    expect(wrapper.vm.result).toBe(18);
  });
  it("Test value operand1 operand2", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1 ]");
    operand1Input.setValue(12);

    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue(2);

    const buttonOp = wrapper.find("button[name = '/']");
    buttonOp.trigger("click");

    expect(wrapper.vm.result).toBe(6);
  });
  it("Test value operand1 operand2", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1 ]");
    operand1Input.setValue(4);

    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue(4);

    const buttonOp = wrapper.find("button[name = '№']");
    buttonOp.trigger("click");

    expect(wrapper.vm.result).toBe(256);
  });
  it("Test value operand1 operand2 ", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1 ]");
    operand1Input.setValue(7);

    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue(3);

    const buttonOp = wrapper.find("button[name = '/0']");
    buttonOp.trigger("click");

    expect(wrapper.vm.result).toBe(2);
  });
  it("Test result", async () => {
    const wrapper = mount(Calculete);
    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue("2");

    const buttonRes = wrapper.find("button[name = res]");

    buttonRes.trigger("click");

    expect(wrapper.vm.operand2).toBe(0);
  });
  it("test Del", async () => {
    const wrapper = mount(Calculete);
    const operand1Input = wrapper.find("input[name = operand1]");
    operand1Input.setValue(12);

    const buttonDel = wrapper.find("button[name = 'delet']");
    buttonDel.trigger("click");

    expect(wrapper.vm.operand1).toBe(1);
  });
  it("test number click", async () => {
    const wrapper = mount(Calculete);
    const operand1Input = wrapper.find("input[name = operand1]");
    operand1Input.setValue(12);

    const numberBtn = wrapper.find("button[name = numberBtn]");
    numberBtn.trigger("click");

    expect(wrapper.vm.operand1).toBe(121);
  });
  it("Test error division 0", async () => {
    const wrapper = mount(Calculete);

    const operand1Input = wrapper.find("input[name = operand1 ]");
    operand1Input.setValue(12);

    const operand2Input = wrapper.find("input[name = operand2 ]");
    operand2Input.setValue(0);

    const buttonOp = wrapper.find("button[name = '/']");
    buttonOp.trigger("click");

    expect(wrapper.vm.error).toBe("Нельзя делить на ноль!");
  });
});
// npm run test
