<script setup lang="ts">
interface User {
    id: String,
    name: String,
    verified: Boolean,
    phone: String 
}

defineProps<{
  user: User
}>();

const emit = defineEmits(['updateUserState']);

</script>