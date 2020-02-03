export enum Key {
    Left,
    Right,
    Throttle,
    Shoot
}

export const KEY_STATE = new Set<Key>();

export function clearKeyState(): void {
    KEY_STATE.delete(Key.Throttle)
    KEY_STATE.delete(Key.Left)
    KEY_STATE.delete(Key.Right)
    KEY_STATE.delete(Key.Shoot)
}

export const keyDownListener = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' || event.key === 'w') {
        KEY_STATE.add(Key.Throttle);
    }
    if (event.key === 'ArrowLeft' || event.key === 'a') {
        KEY_STATE.add(Key.Left)
    }
    if (event.key === 'ArrowRight' || event.key === 'd') {
        KEY_STATE.add(Key.Right)
    }
    if (event.key === ' ' || event.key === 's') {
        KEY_STATE.add(Key.Shoot)
    }
}

export const keyUpListener = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' || event.key === 'w') {
        KEY_STATE.delete(Key.Throttle);
    }
    if (event.key === 'ArrowLeft' || event.key === 'a') {
        KEY_STATE.delete(Key.Left)
    }
    if (event.key === 'ArrowRight' || event.key === 'd') {
        KEY_STATE.delete(Key.Right)
    }
    if (event.key === ' ') {
        // Add delay since sometimes key press doesnt register
        setTimeout(function () { KEY_STATE.delete(Key.Shoot) }, 50);
        // KEY_STATE.delete(Key.Shoot)
    }
}
