<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';




  const resumeURL = 'https://noornawazrahman.github.io/resume-latex/Resume-Latex.pdf';

  async function handleDownload() {
    const response = await fetch(resumeURL);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Resume_Md_Noornawaz_Rahman.pdf';
    link.click();
    URL.revokeObjectURL(link.href);
  }
</script>

<!-- <TitledPage title={ResumeData.title} class="flex flex-col h-screen">
	<a href={ResumeData.resume} class="mx-auto">
		<Button>Download</Button>
	</a>
	<iframe src={ResumeData.resume} class="h-full w-full" title={ResumeData.title}></iframe>


	
</TitledPage> -->


<TitledPage title={ResumeData.title}>
  <div class="flex flex-col h-screen "> 
    
    <iframe
      src={resumeURL}
      class="flex-1 w-full border-none"  
      title={ResumeData.title}
    ></iframe>

	<!-- <a href={'https://noornawazrahman.github.io/resume-latex/Resume-Latex.pdf'} download class="mx-auto my-2">
      <Button on:click={handleDownload}>Download</Button>
    </a> -->
    <Button class="mx-auto my-2" on:click={handleDownload}>Download</Button>

  </div>
</TitledPage>

