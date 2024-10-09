// faq page js
function accordion(index, defaultOpen = false) {
    return {
        isOpen: defaultOpen,
        handleClick() {
            this.isOpen = !this.isOpen;
        },
        handleToggle() {
            console.log(" function called");

            return this.isOpen ? { maxHeight: this.$refs.tab.scrollHeight + 'px' } : { maxHeight: '0px' };
        },
        handleRotate() {
            return this.isOpen ? 'rotate-180' : '';
        }
    };
}