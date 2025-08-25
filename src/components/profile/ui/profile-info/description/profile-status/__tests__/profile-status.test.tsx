import {create} from "react-test-renderer";
import {ProfileStatus} from "../profile-status";

type ProfileStatusInstance = InstanceType<typeof ProfileStatus>

describe('ProfileStatus component', () => {
  test('status from props should be in state', () => {
    const component = create(<ProfileStatus status={'yo'} updateStatusThunk={() => {}}/>)
    const instance = component.getInstance() as unknown as ProfileStatusInstance
    expect(instance.state.status).toBe('yo')
  })

  test('after create <span> should be display', () => {
    const component = create(<ProfileStatus status={'yo'} updateStatusThunk={() => {}}/>)
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBe(null)
  })

  test('after create <span> should be display with correct status', () => {
    const component = create(<ProfileStatus status={'yo'} updateStatusThunk={() => {}}/>)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('yo')
  })

  test('after create <input> shouldnt be display', () => {
    const component = create(<ProfileStatus status={'yo'} updateStatusThunk={() => {}}/>)
    const root = component.root
    expect(() => root.findByType('input')).toThrow()
  })

  test('<input> should be display in editMode instead <span>', () => {
    const component = create(<ProfileStatus status={'yo'} updateStatusThunk={() => {}}/>)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('yo')
  })

  test('callback should be called', () => {
    const fakeCallback = jest.fn()
    const component = create(<ProfileStatus status={'yo'} updateStatusThunk={fakeCallback}/>)
    const instance = component.getInstance() as unknown as ProfileStatusInstance

    instance.toggleEditMode()
    instance.toggleEditMode()

    expect(fakeCallback.mock.calls.length).toBe(1)
  })
})