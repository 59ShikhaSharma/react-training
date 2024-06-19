export function createConnection() {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting...');
        <h3>'✅ Connecting...'</h3>
      },
      disconnect() {
        console.log('❌ Disconnected.');
        <h3>'❌ Disconnected.'</h3>
      }
    };
  }
  