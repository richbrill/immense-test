import { useState, useEffect } from 'react';

function Version() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    async function fetchData() {
      // Have setup a proxy to https://platform.immense.ai/api/v2 in package.json due to CORS issue when running from localhost
      const res = await fetch('/version');
      const { version } = await res.json();
      setVersion(version);
    }
    fetchData();
  }, []);

  return <span>{version}</span>;
}

export default Version;