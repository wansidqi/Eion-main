import { InfoAccordion } from '../components/Info/InfoAccordion';
import { Footer, Navbar } from '../components';

export function Info() {
  return (
    <>
      <section className="max-h-auto height relative h-auto min-h-screen w-full overflow-auto">
        <Navbar />
        <div className="min-h-[70vh] pb-24 lg:min-h-screen">
          <div className="flex flex-col items-center">
            <div className="py-8">
              <h1 className="deadjim py-4 text-center font-bold  lg:text-[64px] ">Unlock the Game’s Secrets</h1>

              <div>
                <p className="roboto-condensed mx-2 text-center font-thin lg:text-[20px] ">
                  Unleash Your Skills, Embrace the Simplicity, and Revel in the Excitement!
                </p>
              </div>
            </div>
          </div>
          <InfoAccordion />
        </div>
        <Footer />
      </section>
    </>
  );
}
