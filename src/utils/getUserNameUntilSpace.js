function getUserNameUntilSpace(name) {
    const spaceIndex = name.indexOf(' ');
    if (spaceIndex !== -1) {
        return name.substring(0, spaceIndex);
    } else {
        return name;
    }
}

export default getUserNameUntilSpace